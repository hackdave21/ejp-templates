// js/store.js
export const mockData = {
    members: [
        { id: 1, firstName: 'Jean-Baptiste', lastName: 'Prodigue', level: 'new', chef: 'Pasteur Emmanuel', joinDate: '2024-01-15' },
        { id: 2, firstName: 'Marie', lastName: 'Adjoa', level: 'star', chef: 'Chef Grâce', joinDate: '2023-11-20' }
    ],
    currentUser: {
        id: 1,
        firstName: 'Jean-Baptiste',
        lastName: 'Prodigue',
        level: 'new',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JB',
        notifications: [
            { id: 1, text: "Bienvenue sur la plateforme EJP !", date: "2024-05-09" }
        ],
        formationsProgress: 15
    }
};

export function getStore() {
    const store = localStorage.getItem('ejp-store');
    return store ? JSON.parse(store) : mockData;
}

export function saveStore(data) {
    localStorage.setItem('ejp-store', JSON.stringify(data));
}

if (!localStorage.getItem('ejp-store')) {
    saveStore(mockData);
}
