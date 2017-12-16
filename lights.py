from lifxlan import LifxLAN
import sys

def main():
	lifx = LifxLAN(3)
	devices = lifx.get_lights()
	
	for d in devices:
		print("{} ({}) HSBK: {}".format(d.get_label(), d.mac_addr, d.get_color()))

	if __name__=="__main__":
		main()
