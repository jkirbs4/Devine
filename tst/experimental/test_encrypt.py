import os
from cryptography.hazmat.primitives.ciphers.aead import AESGCM


class Cipher:

    def __init__(self, bits: int = 12, associated_data: str = ""):

        self.nonce = os.urandom(12) # Must be unique per encryption key.
        self.associated_data = associated_data
        self.cipher = AESGCM(self.generate_key(bits))

    def keygen(bits: int = 256):
        return AESGCM.generate_key(bit_length=bits)

    def encrypt(self, message: str)
        
        return self.cipher.encrypt(self.nonce, message, self.associated_data)
    
    def decrypt(self, ciphertext: str):

        return self.cipher.decrypt(self.nonce, ciphertext, self.associated_data)

