const newman = require('newman'); // Ensure newman is installed via `npm install newman`

newman.run({
    collection: require('./Automatically create and add 10 members in one family.postman_collection.json'),
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
