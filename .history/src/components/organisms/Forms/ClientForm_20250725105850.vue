<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Alert from '../../atoms/Alert.vue';
import InputField from '../../molecules/InputField.vue';
import { isValidCPF } from '../../../utils/Form/Form';
import { useClientsStore } from '../../../store/clients';
import { checkExistingRegistration, getDataById, checkExistingRegistrationEdit } from '../../../utils/register';
import { fetchAddressByCep } from '../../../services/searchCEP';
import ContainerInputs from '../../molecules/ContainerInputs.vue';
import { toggleStatus } from '../../../utils/general';

import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useRouter, useRoute } from 'vue-router';

import type { Ref } from 'vue';
import type { Clients } from '../../../types/general';

const router = useRouter();
const route = useRoute();
const id = route.params.id as string;
const client = useClientsStore();

interface ClientData {
  id: string;
  name: string;
  lastName: string;
  document: string;
  email: string;
  cellPhone: string;
  zipCode: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  status: string;
}

const clientEdit = getDataById(client.clients, id) || ({} as Clients);

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  lastName: yup.string().required('Sobrenome é obrigatório'),
  document: yup.string()
    .required('Campo obrigatório')
    .min(14, 'O documento deve ter pelo menos 14 caracteres')
    .test('is-valid-cpf', 'CPF inválido', value => isValidCPF(value || '')),
  email: yup.string().email('Email inválido').nullable(),
  cellPhone: yup.string().matches(/^\(\d{2}\)\s?\d{5}-\d{4}$/, {
    message: 'Celular inválido',
    excludeEmptyString: true
  }),
  zipCode: yup.string().required('CEP é obrigatório').matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
  street: yup.string().required('Logradouro é obrigatório'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  state: yup.string().required('Estado é obrigatório').length(2, 'Informe a sigla do estado (UF)'),
});

const { handleSubmit, setFieldValue } = useForm<Clients>({
  validationSchema: schema,
  initialValues: {
    name: clientEdit?.name || '',
    lastName: clientEdit?.lastName || '',
    document: clientEdit?.document || '',
    email: clientEdit?.email || '',
    cellPhone: clientEdit?.cellPhone || '',
    zipCode: clientEdit?.zipCode || '',
    street: clientEdit?.street || '',
    neighborhood: clientEdit?.neighborhood || '',
    city: clientEdit?.city || '',
    state: clientEdit?.state || '',
  }
});

const showAlert: Ref<boolean> = ref(false);
const typeAlert: Ref<'sucess' | 'warning'> = ref('sucess');
const messageAlert: Ref<string> = ref('Cadastro criado com sucesso!');

const onSubmit = handleSubmit((values: Clients) => {
  const newId = uuidv4();
  
  const clientData: Clients = {
    id: newId,
    name: values.name,
    lastName: values.lastName,
    document: values.document,
    email: values.email || '',
    cellPhone: values.cellPhone || '',
    zipCode: values.zipCode,
    street: values.street,
    neighborhood: values.neighborhood,
    city: values.city,
    state: values.state,
    status: 'ativo',
  };

  showAlert.value = true;

  if (checkExistingRegistration(client.clients, clientData)) {
    typeAlert.value = 'warning';
    messageAlert.value = 'CPF já cadastrado!';
  } else {
    typeAlert.value = 'sucess';
    client.createClient(clientData);

    setTimeout(() => {
      showAlert.value = false;
      router.push('/clients');
    }, 3000);
  }
});

const onUpdate = handleSubmit((values: Clients) => {
  if (checkExistingRegistrationEdit(client.clients, { document: values.document, id })) {
    typeAlert.value = 'warning';
    messageAlert.value = 'Já existe um cliente com esse CPF!';
    showAlert.value = true;
    return;
  }

  client.updateClient(id, {
    name: values.name,
    document: values.document,
    password: values.password // assuming password can be present in values?
  });

  typeAlert.value = 'sucess';
  messageAlert.value = 'Cadastro atualizado com sucesso!';
  showAlert.value = true;

  setTimeout(() => {
    showAlert.value = false;
    router.push('/clients');
  }, 3000);
});

let lastCep = '';

async function onCepInput(event: Event): Promise<void> {
  const cep = (event.target as HTMLInputElement).value.replace(/\D/g, '');
  if (cep.length === 8 && cep !== lastCep) {
    lastCep = cep;
    const address = await fetchAddressByCep(cep);
    if (address) {
      setFieldValue('street', address.logradouro || '');
      setFieldValue('neighborhood', address.bairro || '');
      setFieldValue('city', address.localidade || '');
      setFieldValue('state', address.uf || '');
    }
  }
}

const changeClientStatus = (): void => {
  toggleStatus(clientEdit.id, client.clients);
  typeAlert.value = 'sucess';
  messageAlert.value = 'Status atualizado com sucesso!';
  showAlert.value = true;

  setTimeout(() => {
    showAlert.value = false;
    router.push('/clients');
  }, 3000);
};
</script>


<template>
    <form @submit.prevent="onSubmit" class="flex flex-col justify-center items-center gap-13">
        <ContainerInputs>
            <InputField
            class="md:w-[448px]"
            messageLabel="Nome"
            placeHolder="Digite seu nome"
            :isRequired=true
            typeField="text"
            name="name"
            :modelValue="clientEdit.name"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="Sobrenome"
            placeHolder="Digite seu Sobrenome"
            :isRequired=true
            typeField="text"
            name="lastName"
            :modelValue="clientEdit.lastName"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="CPF"
            placeHolder="000.000.000-00"
            v-mask="'###.###.###-##'"
            :isRequired="true"
            typeField="text"
            name="document"
            :modelValue="clientEdit.document"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="Email"
            placeHolder="email@example.com"
            :isRequired="false"
            typeField="email"
            name="email"
            :modelValue="clientEdit.email"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="Celular"
            placeHolder="(00)  00000-0000"
            v-mask="'(##) #####-####'"
            :isRequired="false"
            typeField="text"
            name="cellPhone"
            :modelValue="clientEdit.cellPhone"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="CEP"
            placeHolder="00000-000"
            v-mask="'#####-###'"
            :isRequired="true"
            typeField="text"
            name="zipCode"
            :modelValue="clientEdit.zipCode"
            @input="onCepInput"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="Logradouro"
            placeHolder="Rua,  Avenida, etc."
            :isRequired="true"
            typeField="text"
            name="street"
            :modelValue="clientEdit.street"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="Bairro"
            placeHolder="Digite seu Bairro"
            :isRequired="true"
            typeField="text"
            name="neighborhood"
            :modelValue="clientEdit.neighborhood"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="Cidade"
            placeHolder="Digite sua Cidade"
            :isRequired="true"
            typeField="text"
            name="city"
            :modelValue="clientEdit.city"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="Estado"
            placeHolder="UF"
            :isRequired="true"
            typeField="text"
            name="state"
            maxlength="2"
            :modelValue="clientEdit.state"
            />
        </ContainerInputs>
          <div class="flex gap-5 flex-wrap justify-center w-full md:w-auto">
            <Button v-if="clientEdit" typeBtn="button" @click="onUpdate">Salvar</Button>
            <Button v-else typeBtn="submit">Cadastrar</Button>
            <Button v-show="clientEdit" typeBtn="button" @click="changeClientStatus">Ativar/Desativar</Button>
        </div>
        
    </form>

    <Alert v-show="showAlert" :typeAlert="typeAlert"> {{ messageAlert }}</Alert>
</template>

<style scoped>
</style>
