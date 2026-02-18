
import { useContext, useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import '../finance.css'
import FinanceItems from '../FinanceItem';
import { GlobalContext } from '../../../context/GlobalContext';

const Expenses = () => {
    const { expenses, getExpenses, deleteExpense, totalExpense } = useContext(GlobalContext);
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('desc');

    useEffect(() => {
        getExpenses({ category, sort });
    }, [category, sort]);

    return (
        <div className="finance-container">
            <h1>Expenses</h1>
            <h1 className='total-finance' style={{ minHeight: "80px" }}>Total Expenses:<span style={{ color: 'red' }}>${totalExpense()}</span></h1>

            <div className="filter-sort-container" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', justifyContent: 'flex-end' }}>
                <div className="filter-control">
                    <label htmlFor="category-filter" style={{ marginRight: '0.5rem' }}>Filter by Category:</label>
                    <select
                        id="category-filter"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                    >
                        <option value="all">All</option>
                        <option value="education">Education</option>
                        <option value="groceries">Groceries</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="takeaways">Takeaways</option>
                        <option value="clothing">Clothing</option>
                        <option value="travelling">Travelling</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="sort-control">
                    <label htmlFor="sort-order" style={{ marginRight: '0.5rem' }}>Sort by Date:</label>
                    <select
                        id="sort-order"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                    >
                        <option value="desc">Newest First</option>
                        <option value="asc">Oldest First</option>
                    </select>
                </div>
            </div>

            <div className="finance-content">
                <div className="form-content">
                    <ExpenseForm />
                </div>
                <div className="finance-status">
                    <FinanceItems finances={expenses} deleteFinance={deleteExpense} />
                </div>
            </div>
        </div>
    );
}

export default Expenses;