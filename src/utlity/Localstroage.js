const getStoreJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication); // Correct JSON parsing
    }
    return [];
};

const saveJobApplication = id => {
    const storedJobApplications = getStoreJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if (!exists) { // Add only if it doesn't already exist
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
};

export { getStoreJobApplication, saveJobApplication };
