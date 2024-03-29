import Container from '@/Components/Container';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <Container>
                Welcome to dashboard!
            </Container>
        </AuthenticatedLayout>
    );
}
