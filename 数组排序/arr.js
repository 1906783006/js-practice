const arr = [123, 203, 23, 13, 34, 65, 65, 45, 89, 13, 1];

// 1. sort 排序
const ret1 = arr.sort((a, b) => a - b);
// console.log(ret1);

// 2. 选择排序
function selectSort(origin) {
    for(let i = 0; i < origin.length; i++) {
        for(let j = i + 1; j < origin.length; j++) {
            if (origin[j] < origin[i]) {
                const temp = origin[i];
                origin[i] = origin[j];
                origin[j] = temp;
            }
        }
    }
}

// 3. 冒泡排序
function bubbleSort(origin) {
    for(let i = 0; i < origin.length; i++) {
        for(let j = 0; j < origin.length - i; j++) {
            if (origin[j] > origin[j + 1]) {
                const temp = origin[j];
                origin[j] = origin[j + 1];
                origin[j + 1] = temp;
            }
        }
    }
}

// 4. 插入排序
function insertSort(origin) {
    for(let i = 1; i < origin.length; i++) {
        const preIndex = i - 1;
        const current = origin[i];

        while(preIndex >= 0 && origin[preIndex] > current) {
            origin[i + 1] = origin[preIndex];
            preIndex--;
        }

        origin[preIndex + 1] = current;
    }
}

// 5. 快速排序
function quickSort(origin) {
    if (origin.length <= 1) {
        return origin;
    }
    const index = Math.floor(origin.length / 2);
    const pivot = origin.splice(index, 1);

    const left = [];
    const right = [];

    for(let i = 0; i < origin.length; i++) {
        if (origin[i] < pivot) {
            left.push(origin[i]);
        } else if (origin[i] > pivot) {
            right.push(origin[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

// selectSort(arr);
// const ret = quickSort(arr);
insertSort(arr);
// console.log(ret);
console.log(arr);
