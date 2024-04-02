import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [content, setContent] = useState<string>('');

	return (
		<AppContext.Provider value={{ content, setContent }}>
			{children}
		</AppContext.Provider>
	);
};

export const useContent = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useContent must be used within an AppProvider');
	}
	return context;
};
