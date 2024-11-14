import serial





async def temp():
    try:
        
        ser = serial.Serial('COM3', 9600)
        data = ser.readline()
        decoded_data = data.decode().rstrip()
        print(decoded_data)
        return  decoded_data
    except UnicodeDecodeError:
        print("Error decoding data:", data)


