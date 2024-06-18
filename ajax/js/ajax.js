$(document).ready(function(){     
       $.ajax({
            url : "/ajax/json/data.json",
            type : "GET",
            dataType : "json",
            success : function(data){
                console.log(data, typeof data);
                //JSON.parse(data) -> 자바스크립트가 쓸 수 있게 object
                // const data = {
                //     "menu": [
                //       {
                //         "category": "의류",
                //         "subcategories": [
                //           {
                //             "name": "남성 의류",
                //             "items": [
                //               "셔츠",
                //               "바지",
                //               "자켓",
                //               "코트"
                //             ]
                //           },
                //           {
                //             "name": "여성 의류",
                //             "items": [
                //               "원피스",
                //               "블라우스",
                //               "치마",
                //               "가디건"
                //             ]
                //           },
                //           {
                //             "name": "아동 의류",
                //             "items": [
                //               "티셔츠",
                //               "반바지",
                //               "스웨터",
                //               "재킷"
                //             ]
                //           }
                //         ]
                //       },
                //       {
                //         "category": "전자 제품",
                //         "subcategories": [
                //           {
                //             "name": "컴퓨터",
                //             "items": [
                //               "노트북",
                //               "데스크탑",
                //               "모니터",
                //               "키보드"
                //             ]
                //           },
                //           {
                //             "name": "모바일",
                //             "items": [
                //               "스마트폰",
                //               "태블릿",
                //               "액세서리",
                //               "충전기"
                //             ]
                //           },
                //           {
                //             "name": "음향기기",
                //             "items": [
                //               "헤드폰",
                //               "이어폰",
                //               "스피커",
                //               "마이크"
                //             ]
                //           }
                //         ]
                //       },
                //       {
                //         "category": "가전제품",
                //         "subcategories": [
                //           {
                //             "name": "주방 가전",
                //             "items": [
                //               "냉장고",
                //               "전자레인지",
                //               "오븐",
                //               "커피머신"
                //             ]
                //           },
                //           {
                //             "name": "생활 가전",
                //             "items": [
                //               "세탁기",
                //               "청소기",
                //               "에어컨",
                //               "선풍기"
                //             ]
                //           },
                //           {
                //             "name": "뷰티 가전",
                //             "items": [
                //               "헤어드라이어",
                //               "고데기",
                //               "면도기",
                //               "마사지기"
                //             ]
                //           }
                //         ]
                //       }
                //     ]
                //   }
                let gnbli = "";

                data["menu"].forEach(function(ele, idx){
                    //순서대로 순회하면서 실행
                    console.log(`${idx}번째 데이터는 ${ele}`)
                });

                $(".gnb").html()

            },
            error : function(a, b, c){
                console.log(a, b, c);
            }
       })
        
})