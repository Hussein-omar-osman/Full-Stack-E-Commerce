import axios from 'axios';
import create from 'zustand';
import { persist } from 'zustand/middleware';

let store = (set) => ({
	count: 1,
	categories: [],
	loading: false,
	hasErrors: false,

	increment: () =>
		set((state) => ({
			count: state.count + 1,
		})),

	decrement: () =>
		set((state) => ({
			count: state.count - 1,
		})),

	reset: () => set({ count: 1 }),

	addCategories: (category) => {
		set((state) => ({
			categories: [...state.categories, category],
		}));
	},

	fetchCategories: async () => {
		set(() => ({ loading: true }));
		try {
			const response = await axios.get(
				'https://fichuastore.herokuapp.com/api/shop/categories/'
			);
			set((state) => ({
				categories: (state.categories = response.data),
				loading: false,
			}));
		} catch (err) {
			set(() => ({ hasErrors: true, loading: false }));
		}
	},
});

store = persist(store, { name: 'store' });

export const useStore = create(store);

// export const useStore = create((set) => ({
// 	count: 1,
// 	categories: [],
// 	loading: false,
// 	hasErrors: false,
// 	increment: () =>
// 		set((state) => ({
// 			count: state.count + 1,
// 		})),

// 	decrement: () =>
// 		set((state) => ({
// 			count: state.count - 1,
// 		})),

// 	reset: () => set({ count: 1 }),

// 	fetchCategories: async () => {
// 		set(() => ({ loading: true }));

// 		try {
// 			const response = await axios.get(
// 				'https://fichuastore.herokuapp.com/api/shop/categories/'
// 			);

// 			set((state) => ({
// 				categories: (state.categories = response.categories),
// 				loading: false,
// 			}));
// 		} catch (err) {
// 			set(() => ({ hasErrors: true, loading: false }));
// 		}
// 	},
// }));

// let getCategories = (set) => ({
// 	categoryAPI: categoryAPI,
// 	categories: [],

// 	fetchCategories: async (categoryAPI) => {
// 		const response = await fetch(categoryAPI);
// 		const json = await response.json();
// 		set({ categories: json.items });
// 	},
// });
