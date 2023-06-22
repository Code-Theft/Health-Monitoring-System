import re
import json

def parse_response(response):
    response_str = response.decode('utf-8')  # Convert bytes to string
    json_string = re.search(r'{.*}', response_str).group()  # Extract the dictionary portion

    try:
        data = json.loads(json_string)  # Parse the JSON string
        return data
    except json.JSONDecodeError:
        return None