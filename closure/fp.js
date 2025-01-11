import planEstablishProduct from "./planEstablishProduct.js";
import joinProdDtlList from "./joinProdDtlList.js";

console.log(planEstablishProduct);
console.log(joinProdDtlList);

const isNotSpecialRider = (joinProd) =>
  joinProd.faceamnt !== 0 &&
  joinProd.prmum !== 0 &&
  joinProd.chgFaceamnt !== 0 &&
  joinProd.chgPrmum !== 0;

const isSameProductCode = (plan) => (joinProd) =>
  joinProd.prodCd === plan.productCode;

const isNotRemovedByPlan = (plan) => {
  const joinProdDtl = joinProdDtlList
    .filter(isNotSpecialRider)
    .find(isSameProductCode(plan));

  return isNotRemoved(joinProdDtl);
};

const isNotRemoved = (joinProdDtl) => {
  return joinProdDtl.chgFaceamnt !== 0 && joinProdDtl.chgPrmum !== 0;
};

const isNotNull = (plan) => plan !== null;

const newPlanEstablishProduct = planEstablishProduct
  .map((plan, index) => {
    const joinProdDtl = joinProdDtlList
      .filter(isNotSpecialRider)
      .filter(isSameProductCode(plan))
      .find(
        (joinProd) => joinProd.riderNo === (index > 10 ? "" : "0") + (index + 1)
      );

    if (!joinProdDtl) {
      return null;
    }

    return {
      ...plan,
      faceAmount: joinProdDtl.chgFaceamnt / plan.faceAmountUnit,
      premium: joinProdDtl.chgPrmum,
    };
  })
  .filter(isNotNull)
  .filter(isNotRemovedByPlan);

const newProdList = joinProdDtlList
  .filter(
    (joinProd) =>
      !newPlanEstablishProduct.some(
        (plan) => joinProd.prodCd === plan.productCode
      )
  )
  .filter(isNotRemoved)
  .map((joinProd) => ({
    productCode: joinProd.prodCd,
    subStandardGrade: joinProd.riskGrdTariffCd,
    planCode: joinProd.prodCd,
    dispName: joinProd.prodNm,
    productName: joinProd.prodNm,
    coveragePeriodTypeCode: joinProd.insrnPdTyCd,
    coveragePeriodValue: joinProd.insrnPdCo,
    payinPeriodTypeCode: joinProd.payinPdTyCd,
    payinPeriodValue: joinProd.payinPdCo,
    faceAmountUnit: 10000,
    faceAmount: joinProd.chgFaceamnt,
    premium: joinProd.chgPrmum,
    isSpecialYN: "Y",
    mainPolicyRiderTypeCode: "R",
    subInsureType: "",
    custNo: "",
  }));

newPlanEstablishProduct.push(...newProdList);
