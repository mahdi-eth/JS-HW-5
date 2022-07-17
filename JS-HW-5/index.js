const userName = document.getElementById("userName");
const btnFirst = document.getElementById("btnFirst");
const btnSecond = document.getElementById("btnSecond");
const btnThird = document.getElementById("btnThird");
const userLastName = document.getElementById("userLastName");



const btnFirstaction = () => {
    const btnFirstData = {
        inputFirst: btnFirst.value,
    };
   userName.value += btnFirstData.inputFirst;
}

btnFirst.addEventListener("click" , btnFirstaction);

const btnSecondaction = () => {
    const btnSecondData = {
        inputSecond: btnSecond.value,
    };
   userName.value += btnSecondData.inputSecond;
}

btnSecond.addEventListener("click" , btnSecondaction);

const btnThirdaction = () => {
    const btnThirdData = {
        input: btnThird.value,
    };

   console.log(btnThirdData.input);
   userName.value += btnThirdData.input;
}

btnThird.addEventListener("click" , btnThirdaction);


