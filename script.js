const saveBtn = document.getElementById('saveBtn');


saveBtn.addEventListener('click', handleSaveAdress);
function handleSaveAdress() {
    let adressData = getFormDats();
    if (!validate)
