
	var dataList = []
	var totalMoney = 0
	var cardList = []
	


	$(function() {
		json = localStorage.getItem('cardList')
		if(json != null && json != '') {
			cardList = JSON.parse(json)
		}
		for (var i = 0; i < dataList.length; i++) {
			$('#data_list').append(`<div class="col-md-3 item" style="cursor: pointer;" onclick="addCart(${i})">
										<img src="${dataList[i].thumbnail}" style="width: 100%">
										<p>${dataList[i].title} - ${i+1}</p>
										<p>Price: ${dataList[i].price} VND</p>
									</div>`)
		}

		cash = localStorage.getItem('cash')
		$('[name=cash]').val(cash)
		showCart()
	})

	function addCart(index) {
		isFind = false
		for (var i = 0; i < cardList.length; i++) {
			if(cardList[i].index == index) {
				cardList[i].num++;
				isFind = true
				break;
			}
		}
		if(!isFind) {
			cardList.push({
				'index': index,
				'num': 1
			})
		}

		//save localStorage
		localStorage.setItem('cardList', JSON.stringify(cardList))

		showCart()
	}

	function showCart() {
		$('#card_list').empty()
		totalMoney = 0

		for (var i = 0; i < cardList.length; i++) {
			item = dataList[cardList[i].index]
			money = item.price * cardList[i].num
			totalMoney += money

			$('#card_list').append(`<tr>
							<td>
								<img src="${item.thumbnail}" style="width: 100%">
							</td>
							<td>${item.title}</td>
							<td><input type="num" name="num" class="form-control" value="${cardList[i].num}" style="width: 60px"></td>
							<td>${item.title} VND</td>
							<td>${money} VND</td>
						</tr>`)
		}

		$('#total_money').html(totalMoney + ' VND')

		cash = parseInt($('[name=cash]').val())
		cashBack = -totalMoney + cash

		$('#cashback').html(cashBack + ' VND')
	}

	$('[name=cash]').keyup(function() {
		cash = parseInt($(this).val())
		cashBack = -totalMoney + cash

		$('#cashback').html(cashBack + ' VND')

		localStorage.setItem('cash', cash)
	})