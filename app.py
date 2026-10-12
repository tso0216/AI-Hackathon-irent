from flask import Flask, render_template

from config import Config

app = Flask(__name__)


@app.get("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=Config.PORT, debug=True)
