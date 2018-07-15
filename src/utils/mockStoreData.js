import { addExpense } from '../redux/actions';

export default (store) => {
	store.dispatch(addExpense({
		description: "rent",
		note: "june rent",
		amount: 120000,
		createdAt: 1531433953315
	}));
	store.dispatch(addExpense({
		description: "water bill",
		note: "june water",
		amount: 7330,
		createdAt: 1531433953315
	}));
	store.dispatch(addExpense({
		description: "new pool",
		note: "",
		amount: 80000,
		createdAt: 1531433953315
	}));
	store.dispatch(addExpense({
		description: "electricity bill",
		note: "june electricity",
		amount: 20000,
		createdAt: 1531433953315
	}));
	store.dispatch(addExpense({
		id: "dc425bc9-c7e5-49fe-9562-5dd48b764a59",
		description: "sprint",
		note: "june bill",
		amount: 12000,
		createdAt: 1531756800000
	}));
	store.dispatch(addExpense({
		id: '441e69dd-7836-4ce6-9e67-97c723b0b66d',
		description: 'netflix',
		note: 'netflix june',
		amount: 1500,
		createdAt: 1532448000000
	}));
}