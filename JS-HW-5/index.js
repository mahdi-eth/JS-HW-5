const userName = document.getElementById("userName");
const btnFirst = document.getElementById("btnFirst");
const btnSecond = document.getElementById("btnSecond");
const btnThird = document.getElementById("btnThird");


const btnFirstaction = () => {
    const btnFirstData = {
        inputFirst: btnFirst.innerHTML,
    };
   userName.value += btnFirstData.inputFirst;
}

btnFirst.addEventListener("click" , btnFirstaction);

const btnSecondaction = () => {
    const btnSecondData = {
        inputSecond: btnSecond.innerHTML,
    };
   userName.value += btnSecondData.inputSecond;
}

btnSecond.addEventListener("click" , btnSecondaction);

const btnThirdaction = () => {
    const btnThirdData = {
        input: btnThird.innerHTML,
    };

   userName.value += btnThirdData.input;
}

btnThird.addEventListener("click" , btnThirdaction);


