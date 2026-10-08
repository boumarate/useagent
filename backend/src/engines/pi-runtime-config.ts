Ah! The Pi agent inside the sandbox talks to `http://127.0.0.1:${PI_BROKER_PORT}/provider`.
This is the `PI_BROKER_PORT` (which is the local credential broker running inside the sandbox or on the host).
The credential broker is started by `startPiCredentialBroker`: