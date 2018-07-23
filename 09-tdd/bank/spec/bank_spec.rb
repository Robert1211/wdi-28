require_relative '../bank'

describe Bank do
  let(:bank) { Bank.new 'TDD Bank'  } # bank = Bank.new 'TDD Bank'
  describe '.new' do
    it "creates a new bank object" do
      expect(bank).to_not be nil
    end

    it "assigns the bank a name" do
      expect(bank.name).to eq 'TDD Bank'
    end
  end

  describe '#create_account' do
    it 'creates an account for a particular person' do
      bank.create_account 'Craigsy', 200
      expect(bank.accounts['Craigsy']).to eq 200
    end
  end

  describe '#deposit' do
    it 'deposits an amount into a particular customer account' do
      bank.create_account 'Jonesy', 200
      bank.deposit 'Jonesy', 200
      expect(bank.accounts['Jonesy']).to eq 200+200
    end
  end
end
