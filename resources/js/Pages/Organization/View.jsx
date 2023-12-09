import Container from '@/Components/Container';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import List from './List';

export default function View(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Organization" />

            <Container>
                <List/>
            </Container>
        </AuthenticatedLayout>
    );
}