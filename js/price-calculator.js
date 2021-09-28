function calculatePrice(form, output) {
    var askingPrice = form.AskingPrice.value;
    var externalCondition = form.ExternalCondition.value;
    var internalCondition = form.InternalCondition.value;
    var mechanicalCondition = form.MechanicalCondition.value;
    var factor = 0.0;
    factor += externalCondition / 10;
    factor += internalCondition / 10;
    factor += mechanicalCondition / 10;
    factor /= 3;
    document.getElementById("Output").setAttribute("value", (askingPrice * factor).toFixed(2));
}