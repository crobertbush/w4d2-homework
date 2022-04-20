// Falsey Bouncer

/* function bouncer(arr) {
    var truthies = [];

    for(var i of arr) {
        if (i) truthies.push(i);
    }     
    return truthies;
}

bouncer([7, "ate", "", false, 9]); */


/* function bouncer(arr) {
    return arr.filter(function(i) {
        return i;
    });
}

bouncer([7, "ate", "", false, 9]); */


//Chunky Monkey

function chunkArrayInGroups(arr, size) {
    var i = [];
    while (arr.length > 0) {
        i.push(arr.slice(0, size));
        arr = arr.slice(size);
    }
    return i;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

