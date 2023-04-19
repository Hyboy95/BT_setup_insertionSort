export class InsertionSort {
    static list: number[] = [9,3,5,8.2,-1,7.5,4.7,5.3];
    static insertionSort(list: number[]) {
        for (let i = 1; i < list.length; i++) {
            let temp = list[i];
            let j = i - 1;
            while (j >= 0 && list[j] > temp) {
                list[j + 1] = list[j];
                j = j - 1;
            }
            list[j + 1] = temp;
        }
    }
}