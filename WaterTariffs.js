function calculateBill() {

    const waterUsage = Number(document.getElementById("waterUsage").value);

    const householdType = document.getElementById("householdType").value;



    const step1Limit = 6000;

    const step2Limit = 10500;

    const step3Limit = 35000;



    const step1Rate = 15.73;

    const step2Rate = 22.38;

    const step3Rate = 31.77;

    const step4Rate = 69.76;



    let totalCost = 0;



    if (householdType === "indigent") {

        if (waterUsage <= step2Limit) {

            totalCost = 0;

        } else if (waterUsage <= step3Limit) {

            totalCost = (waterUsage - step2Limit) * step3Rate;

        } else {

            totalCost = (step3Limit - step2Limit) * step3Rate + (waterUsage - step3Limit) * step4Rate;

        }

    } else {

        if (waterUsage <= step1Limit) {

            totalCost = waterUsage / 1000 * step1Rate;

        } else if (waterUsage <= step2Limit) {

            totalCost = step1Limit / 1000 * step1Rate + (waterUsage - step1Limit) / 1000 * step2Rate;

        } else if (waterUsage <= step3Limit) {

            totalCost = step1Limit / 1000 * step1Rate + (step2Limit - step1Limit) / 1000 * step2Rate + (waterUsage - step2Limit) / 1000 * step3Rate;

        } else {

            totalCost = step1Limit / 1000 * step1Rate + (step2Limit - step1Limit) / 1000 * step2Rate + (step3Limit - step2Limit) / 1000 * step3Rate + (waterUsage - step3Limit) / 1000 * step4Rate;

        }

    }



    document.getElementById("result").innerText = `Your water bill is R${totalCost.toFixed(2)}`;

}



