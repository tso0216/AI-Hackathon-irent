import os


class Config:
    # 不用 PORT，避免和其他專案共用的 .env 撞埠號
    PORT = int(os.getenv("APP_PORT", "5100"))
