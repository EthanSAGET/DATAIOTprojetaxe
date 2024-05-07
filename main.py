#---------IMPORTS--------
import network
import urequests
import utime
import ujson
from picozero import RGBLED
from time import sleep

#---------CONNECTION--------
wlan = network.WLAN(network.STA_IF)
wlan.active(True)
ssid = 'IIM_Private'
password = 'Creatvive_Lab_2023'
wlan.connect(ssid, password) 
url = "http://192.168.1.3:3000/deck"

while not wlan.isconnected():
    print("pas connecter")
    utime.sleep(1)
    pass
#---------LEDS--------

rgb = RGBLED(red = 18, green = 19, blue = 20)

#---------PROGRAM--------
while(True):
    try:
        print("GET")
        r = urequests.get(url)
        response_as_json = r.json()
        TYPE = response_as_json['house']

        if(house == "Slytherin"):
            rgb.color = (0, 255, 0)

        if(house == "Gryphindor"):
            rgb.color = (0, 0, 255)

        if(house == "ravenclaw"):
            rgb.color = (255, 0, 0)

        if (house == "hufflepuff"):
            rgb.color = (0, 255, 255)

#---------DECONNECTION--------
        r.close()
        utime.sleep(1)
    except Exception as e:
        print(e)