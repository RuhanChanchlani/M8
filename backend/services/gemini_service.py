# gemini_service.py — All Gemini AI logic lives here
#
# TODO:
#   - Import google.generativeai and configure with GEMINI_API_KEY
#   - Initialize model = genai.GenerativeModel("gemini-1.5-flash")
#
# def classify_incident(description: str, room: str) -> dict:
#   - Build a prompt asking Gemini to classify the incident
#   - Ask for JSON response with: type, severity, recommended_action, notify_emergency_services
#   - Parse and return the JSON response
#   - Handle errors gracefully (fallback to type="other", severity="medium")
#
# Example prompt structure:
#   You are an emergency response AI for a hotel.
#   A guest in room {room} reported: "{description}"
#   Respond ONLY in JSON: { type, severity, recommended_action, notify_emergency_services }
