import { useQuery } from "react-query";

interface QueryProps {
    queryUrl: string;
    queryName?: string | string[];
    add?: boolean;
}

export const QueryJSON = ({ queryUrl, queryName }: QueryProps) => {
    const { isLoading, isError, data, error, refetch } = useQuery((queryName)?(queryName):'JSONQuery', () => {
        return fetch(queryUrl)
            .then(res => res.json())
    })

    return { isLoading, isError, data, error, refetch };
}

export const QueryMarkdownText = ({ queryUrl, add }: QueryProps) => {
    const { isLoading, isError, data, error, refetch } = useQuery('TextQuery', () => {
        return fetch((add)?(queryUrl + ".md"):queryUrl)
            .then(res => res.text())
            .then((data) => data.replaceAll('<br/>', '\n'))
    })

    return { isLoading, isError, data, error, refetch };
}