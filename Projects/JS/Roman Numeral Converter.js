function romanConverter(n) {
    /*  input: decimal number
        output: roman number
         */

    //data
    ones = ['I', 'V', 'X'];
    tens = ['X', 'L', 'C'];
    huns = ['C', 'D', 'M'];
    thos = ['M', 'V¯', 'X¯'];

    //vars
    let temp;
    let newarr = [];
    let rem;
    let weight;
    let index1 = 0;
    let active_arr = [];
    let conv_letter = [];

    //blatant edge-cases
    switch (n) {
        case 10:
            return ones[2];
        case 100:
            return tens[2];
        case 1000:
            return huns[2];
    }

    //splitting into array
    temp = n;
    while (temp > 0) {
        rem = temp % 10;
        temp = Math.floor(temp / 10);
        newarr[index1] = rem;
        index1++;
    }

    //real conversion
    for (let i = 0; i < newarr.length; i++) {
        weight = 10 ** i;
        switch (weight) {
            case 1:
                active_arr = ones;
                break;
            case 10:
                active_arr = tens;
                break;
            case 100:
                active_arr = huns;
                break;
            case 1000:
                active_arr = thos;
                break;
        }

        if (newarr[i] == 0) {
            conv_letter[i] = '';
            continue;
        }

        if (newarr[i] < 4 && newarr[i] > 0) {
            conv_letter[i] = '';
            for (let j = newarr[i]; j > 0; j--) {
                conv_letter[i] = conv_letter[i] + active_arr[0];
            }
        }

        if (newarr[i] == 4) {
            conv_letter[i] = active_arr[0] + active_arr[1];
        }

        if (newarr[i] == 5) {
            conv_letter[i] = active_arr[1];
        }

        if (newarr[i] == 9) {
            conv_letter[i] = active_arr[0] + active_arr[2];
        }

        if (newarr[i] > 5 && newarr[i] < 9) {
            conv_letter[i] = active_arr[1];
            for (let j = newarr[i]; j > 5; j--) {
                conv_letter[i] = conv_letter[i] + active_arr[0];
            }
        }
    }

    //stitching together
    conv_letter.reverse();
    let result = conv_letter.join('');
    return result;
}

console.log(romanConverter(999));