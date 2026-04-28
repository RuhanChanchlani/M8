import google.generativeai as genai
import json
from config.settings import GEMINI_API_KEY

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel('gemini-1.5-flash')
else:
    model = None

def classify_incident(description: str) -> dict:
    """
    Classifies an incident description into type and severity using Gemini.
    Returns: {"type": "...", "severity": "..."}
    """
    if not model:
        # Fallback logic if Gemini is not configured
        description_lower = description.lower()
        if any(word in description_lower for word in ["fire", "smoke", "burning", "vent"]):
            return {"type": "fire", "severity": "critical"}
        if any(word in description_lower for word in ["heart", "breath", "blood", "medical", "hurt", "pain", "chest", "doctor"]):
            return {"type": "medical", "severity": "critical"}
        if any(word in description_lower for word in ["theft", "fight", "security", "intruder"]):
            return {"type": "security", "severity": "high"}
        if any(word in description_lower for word in ["leak", "water", "broken", "light"]):
            return {"type": "maintenance", "severity": "medium"}
        return {"type": "other", "severity": "low"}

    prompt = f"""
    Classify the following incident description into one of these types: fire, medical, security, maintenance, other.
    Also assign a severity level: critical, high, medium, low.
    Return ONLY a JSON object with keys 'type' and 'severity'.
    
    Description: {description}
    """
    
    try:
        response = model.generate_content(prompt)
        # Clean up response text in case Gemini adds markdown backticks
        json_str = response.text.strip().replace('```json', '').replace('```', '')
        return json.loads(json_str)
    except Exception as e:
        print(f"Error calling Gemini: {e}")
        return {"type": "other", "severity": "low"}
