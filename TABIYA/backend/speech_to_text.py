import pyaudio
import wave
import requests

# Audio recording settings
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 16000
CHUNK = 1024
RECORD_SECONDS = 5
OUTPUT_FILENAME = "output.wav"

# API URL and key
url = "https://api.your-speech-to-text-service.com/v1/recognize"
headers = {
    'X-RapidAPI-Key': 'e351901435msh65989b53ac5f59ep1b5033jsn50d977c007bf',
    'Content-Type': 'audio/wav',
}

# Record audio
audio = pyaudio.PyAudio()
print("Recording...")
stream = audio.open(format=FORMAT,
                    channels=CHANNELS,
                    rate=RATE,
                    input=True,
                    frames_per_buffer=CHUNK)
frames = []
for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)
stream.stop_stream()
stream.close()
audio.terminate()

# Save audio file
with wave.open(OUTPUT_FILENAME, 'wb') as wf:
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(audio.get_sample_size(FORMAT))
    wf.setframerate(RATE)
    wf.writeframes(b''.join(frames))

print(f"Audio saved as {OUTPUT_FILENAME}")

# Send the recorded audio to the API
with open(OUTPUT_FILENAME, 'rb') as audio_file:
    response = requests.post(url, headers=headers, files={'audio': audio_file})

# Process the response
if response.status_code == 200:
    print("Speech to text result:", response.json())
else:
    print("Failed to process audio. Status code:", response.status_code)
    print(response.text)
