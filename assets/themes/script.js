function kalkulasiberatbadan() {
    // Get gender
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Get weight, height, and age
    const weight = parseFloat(document.getElementById('input-berat-badan').value);
    const height = parseFloat(document.getElementById('input-tinggi-badan').value);
    const age = parseFloat(document.getElementById('input-usia').value);

    // Input validation (optional)
    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
        alert("Please enter valid values for weight, height, and age.");
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Interpret BMI result
    let hasilkeseluruhan1;
    let hasilkeseluruhan;
    if (gender === 'laki') {
        if (bmi < 18.5) {
            hasilkeseluruhan1 = "Berat badan kurang ideal";
            hasilkeseluruhan = "Anda memiliki berat badan yang kurang ideal";
            showSuggestions('underweight');
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            hasilkeseluruhan1 = "Berat badan ideal";
            hasilkeseluruhan = "Anda memiliki berat badan yang ideal";
            showSuggestions('ideal');
        } else if (bmi >= 25 && bmi <= 29.9) {
            hasilkeseluruhan1 = "Berat badan sedikit berlebihan";
            hasilkeseluruhan = "Anda memiliki berat badan yang sedikit berlebihan";
            showSuggestions('overweight');
        } else {
            hasilkeseluruhan1 = "Berat badan sangat berlebihan";
            hasilkeseluruhan = "Anda memiliki berat badan yang Memasuki katagori Obesitas";
            showSuggestions('obese');
        }
    } else if (gender === 'wanita') {
        if (bmi < 17.5) {
            hasilkeseluruhan1 = "Berat badan kurang ideal";
            hasilkeseluruhan = "Anda memiliki berat badan yang kurang ideal";
            showSuggestions('underweight');
        } else if (bmi >= 17.5 && bmi <= 24.9) {
            hasilkeseluruhan1 = "Berat badan ideal";
            hasilkeseluruhan = "Anda memiliki berat badan yang ideal";
            showSuggestions('ideal');
        } else if (bmi >= 25 && bmi <= 29.9) {
            hasilkeseluruhan1 = "Berat badan sedikit berlebihan";
            hasilkeseluruhan = "Anda memiliki berat badan yang sedikit berlebihan";
            showSuggestions('overweight');
        } else {
            hasilkeseluruhan1 = "Berat badan sangat berlebihan";
            hasilkeseluruhan = "Anda memiliki berat badan yang Memasuki katagori Obesitas";
            showSuggestions('obese');
        }
    }

    // Display result with hasilkeseluruhan
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>${hasilkeseluruhan1}</p> <br>
        <h1>${bmi.toFixed(2)}</h1> <br>
        <p>${hasilkeseluruhan}</p>
    `;
}
function showSuggestions(category) {
    const suggestionsElement = document.getElementById('suggestions');
    suggestionsElement.innerHTML = '';

    if (category === 'underweight') {
        suggestionsElement.innerHTML += '<p>Anda kekurangan berat badan. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan saran yang tepat.</p>';
        suggestionsElement.innerHTML += '<p>Makanan yang perlu ditingkatkan:</p><ul><li>Makanan kaya protein</li><li>Makanan kaya lemak sehat</li><li>Karbohidrat kompleks</li></ul>';
    } else if (category === 'overweight' || category === 'obese') {
        suggestionsElement.innerHTML += '<p>Anda kelebihan berat badan. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan saran yang tepat.</p>';
        suggestionsElement.innerHTML += '<p>Makanan yang perlu dikurangi:</p><ul><li>Makanan tinggi gula</li><li>Makanan tinggi lemak jenuh</li><li>Makanan cepat saji</li><li>Minuman manis</li></ul>';
        suggestionsElement.innerHTML += '<p>Makanan yang perlu ditingkatkan:</p><ul><li>Buah dan sayuran</li><li>Protein tanpa lemak</li><li>Gandum utuh</li><li>Air putih</li></ul>';
    }else if (category === 'ideal') {
        suggestionsElement.innerHTML += '<p>Selamat berat badan anda masuk dalam katagori IDEAL, tetap jaga kesehatan dengan banyak berolahraga, istirahat yang cukup, dan mengonsumsi makanan yang seimbang.</p>';
    }
    }

function resetForm() {
// Clear input fields
document.getElementById('input-berat-badan').value = "";
document.getElementById('input-tinggi-badan').value = "";
document.getElementById('input-usia').value = "";

// Clear gender selection
document.getElementById('selection-pria').checked = true;
document.getElementById('selection-wanita').checked = false;

// Clear result
document.getElementById('result').innerHTML = "<p>Berat Anda Belum diketahui</p> <h1>0</h1> <p>Kami menunggu anda input terlebih dahulu</p>";
document.getElementById('suggestions').innerHTML = "";
}