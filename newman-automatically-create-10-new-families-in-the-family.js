const newman = require('newman'); // Ensure newman is installed via `npm install newman`

newman.run({
    collection: require('./Automatically create 10 new families in the family list.postman_collection.json'),
    reporters: ['cli', 'htmlextra']
}, function (err, summary) {
    if (err) {
        throw err;
    }
    console.log('Collection run complete!');
    // Optional: Check the summary object for more details
    if (summary.run.failures.length > 0) {
        console.error('There were test failures!');
        summary.run.failures.forEach(failure => {
            console.error(failure.error);
        });
    }
});
