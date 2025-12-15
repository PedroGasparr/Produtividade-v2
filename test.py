import pyautogui
import keyboard
import random
import time

print("Movendo o mouse... aperte ESPAÇO para parar.")

try:
    while True:
        if keyboard.is_pressed("space"):
            print("Parado!")
            break

        # move o mouse para uma posição aleatória
        x = random.randint(0, pyautogui.size().width)
        y = random.randint(0, pyautogui.size().height)

        pyautogui.moveTo(x, y, duration=0.3)

        time.sleep(0.2)

except KeyboardInterrupt:
    print("Interrompido pelo usuário.")
           