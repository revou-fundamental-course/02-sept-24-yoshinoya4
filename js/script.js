 function calculatePerimeter() {
            var side1 = parseFloat(document.getElementById('side1').value);
            var side2 = parseFloat(document.getElementById('side2').value);
            var side3 = parseFloat(document.getElementById('side3').value);

           
            if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
                document.getElementById('result').innerText = 'Harap masukkan nilai yang valid untuk semua sisi.';
                return;
            }

           ide2 + side3;

            
            document.getElementById('result').innerText = 'Keliling Segitiga: ' + perimeter;
        }