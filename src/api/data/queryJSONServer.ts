import { useQuery } from "react-query";

interface QueryProps {
    queryUrl: string;
}

export const QueryJSON = ({ queryUrl }: QueryProps) => {
    const { isLoading, isError, data, error, refetch } = useQuery('JSONQuery', () => {
        return fetch(queryUrl)
            .then(res => res.json())

    })

    return { isLoading, isError, data, error, refetch };
}

export const QueryMarkdownText = ({ queryUrl }: QueryProps) => {
    const { isLoading, isError, data, error, refetch } = useQuery('TextQuery', () => {
        return fetch(queryUrl)
            .then(res => res.text())
            .then((data) => data.replaceAll('<br/>', '\n'))
    })

    return { isLoading, isError, data, error, refetch };
}