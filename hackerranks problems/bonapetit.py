def bonAppetit(bill, k, b):

	#print bill

	bill.pop(k)

	#print bill

	total_bill = sum(bill)

	#print total_bill

	anns_share = total_bill/2

	if anns_share < b:
		return b-anns_share

	elif anns_share == b:
		return " Bon Appetit "



	

print bonAppetit([3,10,2,9],1,12)


