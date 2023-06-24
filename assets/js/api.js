async function fetchProfileData() {
    const url = 'https://github.com/KaikiWilson/DIO-Portfolio-Profissional.git/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
