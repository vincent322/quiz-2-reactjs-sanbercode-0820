function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function (resolve, reject) {
        var books = [
            { name: "shinchan", totalPage: 50, isColorful: true },
            { name: "kalkulus", totalPage: 250, isColorful: false },
            { name: "doraemon", totalPage: 40, isColorful: true },
            { name: "algoritma", totalPage: 300, isColorful: false },
        ]
        if (amountOfPage > 0) {
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            var reason = new Error("maaf parameter salah")
            reject(reason);
        }
    });
}

filterBooksPromise(true, 40).then(function sig(x){
    console.log(x);
});

filterBooksPromise(false, 275).then(function sig(x){
    console.log(x);
}); 