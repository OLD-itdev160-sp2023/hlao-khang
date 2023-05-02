(function() {
    // 'database' of featured packages
    var data = [
        {
            name: 'Open in Browser',
            description: 'This Visual Studio Code extension does exactly what it says: it enables you to view an HTML file in-browser. It opens HTML pages in your default browser, but you can also select “open in other browsers” to open in a different one on right click.',
            author: 'by TechER',
            downloads: 7778371,
            price: 'free',
            selector: 'p1'
        },
        {
            name: 'CSS Peek',
            description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.',
            author: 'by Pranay Prakash',
            downloads: 4250543,
            price: 'free',
            selector: 'p2'
        }
    ];

    // function constructs packages
    function Package(data){
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.downloads = data.downloads;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };
    }

    // Utility Functions
    //shorthands document.getElementByID
    function getEl(id) {
        return document.getElementById(id);
    };

    function getTodaysDate(){
        var date = new Date();
        return date.toDateString();
    }

    var writePackageInfo = function(package){
        // get reference to DOM elements
        var selector = package.selector;
        var nameEl = getEl(selector + '-name');
        var descEl = getEl(selector + '-description');
        var authEl = getEl(selector + '-author');
        var downloadEl = getEl(selector + '-downloads');

        // get package data to DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads() + ' Downloads';
    };

    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    for(var i = 0; i < data.length; ++i){
        var package = new Package(data[i]);
        writePackageInfo(package);
    }
} ());