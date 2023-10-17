import Header from '~/layouts/components/Header/Header';
function defaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default defaultLayout;
