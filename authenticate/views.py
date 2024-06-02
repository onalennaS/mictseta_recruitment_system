from django.shortcuts import render
import json
# Create your views here.


def sign_in(request):

	if request.method == "POST":

		data = json.loads(request.body)
		email = data.get('email')
		password = data.get('password')



	return render(request, "login.html")