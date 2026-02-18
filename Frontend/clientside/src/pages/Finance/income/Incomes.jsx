
import { useContext, useEffect, useState } from 'react';
import IncomeForm from './IncomeForm';
import '../finance.css'
import FinanceItems from '../FinanceItem';
import { GlobalContext } from '../../../context/GlobalContext';

const Incomes = () => {
    const { incomes, getIncomes, deleteIncome, totalIncome } = useContext(GlobalContext);
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('desc');

    useEffect(() => {
        getIncomes({ category, sort });
    }, [category, sort]);

    return (
        <div className="finance-container">
            <h1>Incomes</h1>
            <h1 className='total-finance' style={{ minHeight: "80px" }}>Total Incomes:<span style={{ color: 'green' }}>${totalIncome()}</span></h1>

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
                        <option value="salary">Salary</option>
                        <option value="freelancing">Freelancing</option>
                        <option value="investments">Investments</option>
                        <option value="stocks">Stocks</option>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="bank">Bank Transfer</option>
                        <option value="youtube">Youtube</option>
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
                    <IncomeForm />
                </div>
                <div className="finance-status">
                    <FinanceItems finances={incomes} deleteFinance={deleteIncome} />
                </div>
            </div>
        </div>
    );
}

export default Incomes;