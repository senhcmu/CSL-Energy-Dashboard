
import requests
from django.http import HttpResponse
import json
from datetime import datetime, timedelta

from requests.adapters import HTTPAdapter
from requests.packages.urllib3.poolmanager import PoolManager


def grate(request):
    return HttpResponse('Hello there!')



def getFromPi(url):
	# Never check any hostnames
	class HostNameIgnoringAdapter(HTTPAdapter):
	    def init_poolmanager(self, connections, maxsize, block=False):
	        self.poolmanager = PoolManager(num_pools=connections,
	                                       maxsize=maxsize,
	                                       block=block,
	                                       assert_hostname=False)
	s = requests.Session()
	s.mount('https://', HostNameIgnoringAdapter())
	r = s.get(
		url, auth=('CMU_Students', 'WorkHard!ChangeWorld'), verify=False)
	r = json.loads(r.text)
	return r

#PHIPPS_Elec All Consumption CSL_Daily
# def getRealTimeValue108T1(request):
def getElecAllConsumption(request):
	r = getFromPi('https://128.2.109.159/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0A1goBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEFMTCBDT05TVU1QVElPTiBDU0xfREFJTFk/EndValue');
	return HttpResponse(r)





#PHIPPS_Elec All Consumption CSL_One Year
def getElecConsumptionOneYear(request, hours):

	now = datetime.utcnow();
	nowMXhr = now - timedelta(hours = hours);
	url = 'https://128.2.109.159/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0A5woBAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEFMTCBDT05TVU1QVElPTiBDU0xfT05FIFlFQVI' +\
	      '/interpolated?starttime=%s&endtime=%s&interval=100m'%(nowMXhr.isoformat(), now.isoformat())
	# print (url)
	r = getFromPi(url);
	print(r)
	retItems = r['Items'];
	formedTimeSeries = [];
	for retItem in retItems:
		if retItem["Good"]:
			formedTimeSeries.append([retItem["Timestamp"], retItem["Value"]]);
	response = {'Items': formedTimeSeries}
	return JsonResponse(response, json_dumps_params={'indent': 2})

#PHIPPS_Elec All Consumption CSL_One Year
def getElecConsumptionOneMonth(request, days):

	now = datetime.utcnow();
	nowMXhr = now - timedelta(days = days);
	url = 'https://128.2.109.159/piwebapi/streams/P0-MYhSMORGkyGTe9bdohw0A0fcAAAV0lOLTYyTlBVMkJWTDIwXFBISVBQU19FTEVDIEFMTCBDT05TVU1QVElPTiBDU0xfTU9OVEggVE8gREFURQ' +\
	      '/interpolated?starttime=%s&endtime=%s&interval=1d'%(nowMXhr.isoformat(), now.isoformat())
	# print (url)
	r = getFromPi(url);
	print(r)
	retItems = r['Items'];
	formedTimeSeries = [];
	for retItem in retItems:
		if retItem["Good"]:
			formedTimeSeries.append([retItem["Timestamp"], retItem["Value"]]);
	response = {'Items': formedTimeSeries}
	return JsonResponse(response, json_dumps_params={'indent': 2})



	




	