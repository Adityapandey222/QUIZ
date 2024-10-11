from flask import Flask, render_template
from plyer import notification
import time

app = Flask(__name__)

def send_notification(title, message):
    notification.notify(
        title=title,
        message=message,
        app_icon=None,
        timeout=10,
    )

@app.route('/')
def index():
    title = "Notification Title"
    message = "This is a sample notification message."
    send_notification(title, message)
    
    return render_template('index.html', title=title, message=message)

if __name__ == "__main__":
    app.run(debug=True)
