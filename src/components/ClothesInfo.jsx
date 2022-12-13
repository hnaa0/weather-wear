export default function ClothesInfo(props) {
  const { data } = props;
  const temp = Number(data.celTemp);

  function getClothes(temp) {
    let imgSrc = "";
    if (temp <= 5) {
      imgSrc = "./clothesImgs/icons8-puffer-coat-64.png";
    } else if (temp <= 9) {
      imgSrc = "./clothesImgs/icons8-scarf-64.png";
    } else if (temp <= 11) {
      imgSrc = "./clothesImgs/icons8-jacket-64.png";
    } else if (temp <= 16) {
      imgSrc = "./clothesImgs/icons8-hoodie-64.png";
    } else if (temp <= 19) {
      imgSrc = "./clothesImgs/icons8-cardigan-64.png";
    } else if (temp <= 22) {
      imgSrc = "./clothesImgs/icons8-long-sleeve-64.png";
    } else if (temp >= 26) {
      imgSrc = "./clothesImgs/icons8-t-shirt-64.png";
    } else if (temp >= 27) {
      imgSrc = "./clothesImgs/icons8-tank-top-64.png";
    }
    return imgSrc;
  }

  function getSentence(temp) {
    let sentence = "";
    if (temp <= 5) {
      sentence = "완연한 겨울 날씨예요.⛄";
    } else if (temp <= 9) {
      sentence = "제법 추운 날씨예요.❄";
    } else if (temp <= 11) {
      sentence = "겨울의 초입으로 들어가는 날씨예요.❄";
    } else if (temp <= 16) {
      sentence = "아직은 쌀쌀해요. 얇은 겉옷을 챙겨보는 건 어떨까요?🧥";
    } else if (temp <= 19) {
      sentence = "가을과 봄의 날씨예요.🌼🌻";
    } else if (temp <= 22) {
      sentence = "덥지도 춥지도 않은 딱 적당한 날씨! 야외 나들이가기 좋아요.🚗";
    } else if (temp >= 26) {
      sentence = "제법 더운 날씨예요.";
    } else if (temp >= 27) {
      sentence = "무더운 여름 날씨예요.⛱";
    }
    return sentence;
  }

  return (
    <>
      <div className="flex">
        <img className="w-10 h-10" src={getClothes(temp)} alt="" />
      </div>
      <span className="pt-2 text-sm">{getSentence(temp)}</span>
    </>
  );
}
