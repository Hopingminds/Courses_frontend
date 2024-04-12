export function formatDate(dateString) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;
    return formattedDate;
}

export const cropString = (str, num) => {
    // console.log(str);
    var newstr;
    if (str.length > num) {
        if (window.innerWidth > 700) {
            newstr = str.slice(0, num + 10);
        } else {
            newstr = str.slice(0, num + 5);
        }
        // console.log(newstr);
        const result = newstr.concat("...");

        return result;
    } else return str;
};

// export async function getVideoDuration(videoUrl) {
//     try {

//         const response = await fetch(videoUrl);

//         const blob = await response.blob();
//         const video = document.createElement('video');
//         await new Promise((resolve, reject) => {
//             video.addEventListener('loadedmetadata', () => {

//                 resolve();
//             });
//             video.addEventListener('error', (error) => {
//                 reject(error);
//             });

//             video.src = URL.createObjectURL(blob);
//         });
//         const duration = video.duration;

//         URL.revokeObjectURL(video.src);

//         return duration;
//     } catch (error) {
//         console.error('Error fetching video:', error);
//         return null;
//     }
// }

export function getVideoDuration(videoUrl) {
    const video = document.createElement('video');
    video.src = videoUrl;
    video.preload = 'metadata'; // Load only metadata, not the entire video
    const duration = new Promise((resolve, reject) => {
        video.onloadedmetadata = () => {
            resolve(video.duration);
        };
        video.onerror = (error) => {
            reject(error);
        };
    });
    return duration;
}