import os
from cryptography.hazmat.primitives.ciphers.aead import AESGCM


class Cipher:

    def __init__(self, bits: int = 256, associated_data: str = "", nonce: int = 12):

        self.nonce = os.urandom(nonce) # Must be unique per encryption key.
        self.associated_data = associated_data
        self.cipher = AESGCM(self.keygen(bits))

    @staticmethod
    def keygen(bits: int = 256):
        return AESGCM.generate_key(bit_length=bits)

    def encrypt(self, message: str):
        
        message_bytes = message.encode("utf-8")
        associated_data_bytes = self.associated_data.encode("utf-8")

        return self.cipher.encrypt(self.nonce, message_bytes, associated_data_bytes)
    
    def decrypt(self, ciphertext: str):

        associated_data_bytes = self.associated_data.encode("utf-8")
        message_bytes = self.cipher.decrypt(self.nonce, ciphertext, associated_data_bytes)
        message = message_bytes.decode("utf-8")

        return message
    
def main():

    cipher = Cipher()
    message: str = "This is my message."
    print("Message: ", message)
    ciphertext: str = cipher.encrypt(message)
    print("Ciphertext: ", ciphertext)
    reconstructed_message = cipher.decrypt(ciphertext)
    print("Reconstructed Message: ", reconstructed_message)

    assert (message == reconstructed_message)
    print("The messages match!")

if __name__ == "__main__":
    main()
