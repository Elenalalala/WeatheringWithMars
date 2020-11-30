var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyYdN7Jur6PIL9sJ'}).base('app5nhnz5z6CwkYKo');

base('Table 1').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Images'));
        const title = document.getElementById('title1');
        const time = document.getElementById('time');
        const summary = document.getElementById('summary');
        const description = document.getElementById('description');
        const imgSection = document.getElementById('right');
        

        title.textContent = record.get('Title');
        time.innerHTML = record.get('Time');
        summary.textContent = record.get('Summary');
        description.textContent = record.get('Description');
        record.get('Images').forEach(pic=>{
            const img = document.createElement("img");
            img.src = pic.url;
            imgSection.appendChild(img);
        });
    });


}, function done(err) {
    if (err) { console.error(err); return; }
});